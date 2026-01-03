import { SignUp } from "@clerk/clerk-react";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center py-12">
      <SignUp routing="path" path="/register" />
    </div>
  );
}
