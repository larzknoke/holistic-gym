"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminAuthCard({ mode }) {
  const isSignIn = mode === "signin";
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!isSignIn && password !== confirmPassword) {
      setError("Passwoerter stimmen nicht ueberein.");
      return;
    }

    setIsLoading(true);

    if (isSignIn) {
      const { error: signInError } = await authClient.signIn.email({
        email,
        password,
      });

      setIsLoading(false);

      if (signInError) {
        setError(signInError.message || "Anmeldung fehlgeschlagen.");
        return;
      }

      router.push("/admin/kurse");
      router.refresh();
      return;
    }

    const { error: signUpError } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setIsLoading(false);

    if (signUpError) {
      setError(signUpError.message || "Registrierung fehlgeschlagen.");
      return;
    }

    setSuccess(
      "Registrierung erfolgreich. Dein Account ist gesperrt und muss manuell freigegeben werden.",
    );
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="mb-2 flex justify-center">
          <Image
            src="/assets/gym/gym-logo-v2.svg"
            alt="HolisticGym Logo"
            width={170}
            height={132}
            priority
          />
        </div>
        <CardTitle>
          {isSignIn ? "Admin Login" : "Admin Registrierung"}
        </CardTitle>
        <CardDescription>
          {isSignIn
            ? "Melde dich mit deinem Konto an."
            : "Erstelle ein Konto. Die Freischaltung erfolgt spaeter manuell."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {!isSignIn ? (
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
          ) : null}

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="email">
              E-Mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Passwort
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {!isSignIn ? (
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="confirmPassword">
                Passwort bestaetigen
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
          ) : null}

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {success ? (
            <p className="text-sm text-emerald-700">{success}</p>
          ) : null}

          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Bitte warten..."
              : isSignIn
                ? "Einloggen"
                : "Registrieren"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          {isSignIn ? "Noch kein Konto? " : "Schon registriert? "}
          <Link
            href={isSignIn ? "/admin/signup" : "/admin/signin"}
            className="font-medium underline"
          >
            {isSignIn ? "Jetzt registrieren" : "Zum Login"}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
