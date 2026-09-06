import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(80),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(20).max(2000),
});

/** Public: saves an enquiry from the website contact form. */
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      website: data.website || null,
      industry: data.industry || null,
      service: data.service,
      budget: data.budget || null,
      message: data.message,
    });
    if (error) {
      console.error("Failed to save lead", error);
      throw new Error("We could not save your enquiry. Please try WhatsApp or email.");
    }
    return { ok: true };
  });

/** Admin only: list every saved enquiry, newest first. */
export const listLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

/** Admin only: update the status or internal notes on an enquiry. */
export const updateLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["new", "contacted", "closed"]).optional(),
        internal_notes: z.string().max(2000).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const patch: { status?: "new" | "contacted" | "closed"; internal_notes?: string | null } = {};
    if (data.status !== undefined) patch.status = data.status;
    if (data.internal_notes !== undefined) patch.internal_notes = data.internal_notes;
    const { error } = await context.supabase.from("leads").update(patch).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });


/** Tells the signed-in user whether they are an approved team member. */
export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (error) throw new Error(error.message);
    return { isAdmin: data === true };
  });
