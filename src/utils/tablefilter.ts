import { z } from "zod";

export const tableFilterSchema = z.object({
  organization: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  phonenumber: z.string().optional(),
  dateJoined: z.string().optional(),
  status: z.string().optional(),
});

export type TableFilterSchemaType = z.infer<typeof tableFilterSchema>;
