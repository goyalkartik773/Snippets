"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const snippetSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    code: z.string().min(1, "Code is required"),
    language: z.string().min(1, "Language is required"),
    description: z.string().optional(),
    tags: z.string().optional(),
});

export const saveSnippet = async (
    id: number,
    code: string,
    language: string
) => {
    await prisma.snippet.update({
        where: {
            id,
        },
        data: {
            code,
            language,
        },
    });

    revalidatePath(`/snippet/${id}`);
    redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: { id },
    });
    revalidatePath("/");
    redirect("/");
};

export const toggleFavorite = async (id: number, isFavorite: boolean) => {
    await prisma.snippet.update({
        where: { id },
        data: { isFavorite },
    });
    revalidatePath("/");
};

export async function createSnippet(
    prevState: { message: string },
    formData: FormData
) {
    try {
        const title = formData.get("title");
        const code = formData.get("code");
        const language = formData.get("language");
        const description = formData.get("description");
        const tags = formData.get("tags");

        const validatedData = snippetSchema.parse({
            title,
            code,
            language,
            description: description || undefined,
            tags: tags || undefined,
        });

        await prisma.snippet.create({
            data: {
                title: validatedData.title,
                code: validatedData.code,
                language: validatedData.language,
                description: validatedData.description || null,
                tags: validatedData.tags || null,
            },
        });

        revalidatePath("/");
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            return { message: error.issues[0].message };
        }
        if (error instanceof Error) {
            return { message: error.message };
        }
        return { message: "Some internal server error" };
    }

    redirect("/");
}