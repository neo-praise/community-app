"use client";

import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function ProfileOnboarding() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    phoneNumbers: "",
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-lg rounded-2xl shadow-sm">
        <CardContent className="p-6 space-y-6">
          <header className="space-y-1">
            <h1 className="text-xl font-semibold">Profile Onboarding</h1>
            <p className="text-sm text-gray-500">Step {step} of 3</p>
          </header>

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Full Name</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </div>
              {/* <div className="space-y-1">
                <Label>Last Name</Label>
                <Input
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </div> */}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label>Role</Label>
                <Input
                  placeholder="e.g. Student, Teacher"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Phone Numbers</Label>
                <textarea
                  className="w-full rounded-md border p-2 text-sm"
                  rows={4}
                  value={form.phoneNumbers}
                  onChange={(e) => update("phoneNumbers", e.target.value)}
                />
              </div>
              <div className="rounded-lg bg-gray-100 p-3 text-sm">
                <p className="font-medium">Preview</p>
                <p>{form.fullName}</p>
                <p>{form.email}</p>
                <p>{form.role}</p>
              </div>
            </div>
          )}

          <footer className="flex justify-between">
            <Button
              variant="outline"
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>Next</Button>
            ) : (
              <Button>Finish</Button>
            )}
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
