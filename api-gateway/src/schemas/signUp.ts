import { z } from 'zod';

const SignUpSchema = z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(6),
});

export default SignUpSchema;
