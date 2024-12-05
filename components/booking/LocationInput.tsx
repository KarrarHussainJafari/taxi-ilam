import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}

export function LocationInput({
  label,
  value,
  onChange,
  placeholder,
  error
}: LocationInputProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}