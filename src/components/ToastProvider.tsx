"use client";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./ThemeProvider";

export default function ToastProvider() {
    const { theme } = useTheme();

    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    background: theme === "dark" ? "#1f2937" : "#ffffff",
                    color: theme === "dark" ? "#f3f4f6" : "#1f2937",
                    border: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`,
                },
                success: {
                    iconTheme: {
                        primary: "#10b981",
                        secondary: "#ffffff",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "#ef4444",
                        secondary: "#ffffff",
                    },
                },
            }}
        />
    );
}
