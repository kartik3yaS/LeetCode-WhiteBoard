"use client"
    
import { z } from "zod"
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    id: z
      .string() // Accept a string input
      .refine((val) => /^\d+$/.test(val), {
        message: "ID must be a positive integer",
      }) // Validate if it's a valid integer
      .refine((val) => parseInt(val) > 0, {
        message: "ID must be a positive integer",
      }), // Validate if it's positive
  });

export function MyForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        id: undefined,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const idValue=values.id;
        router.push(`/problems/${idValue}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>ID</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter the problem ID" {...field} />
                    </FormControl>
                    <FormDescription>
                        Redirects you to the specific problem whiteboard.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}