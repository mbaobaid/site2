import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-background px-4">
      <div className="max-w-md text-center rounded-xl border border-border bg-card p-10 shadow-sm">
        <AlertCircle className="mx-auto mb-4 text-accent" size={48} />
        <h1 className="text-3xl font-bold text-primary mb-3">الصفحة غير موجودة</h1>
        <p className="text-muted-foreground mb-6">الرابط الذي فتحته غير صحيح أو تم نقله.</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-white font-semibold">
          <Home size={18} /> العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
