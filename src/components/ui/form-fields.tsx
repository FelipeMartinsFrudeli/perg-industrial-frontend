import {
  FormField,
} from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";


type ImageUploadProps = {
  name: string;
  label: string;
};

export const ImageUpload = ({ name, label }: ImageUploadProps) => {
  const { control } = useFormContext();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col col-span-12">
          <label htmlFor={name} className="mb-2 text-sm font-medium text-gray-700">
            {label}
          </label>
          <input
            type="file"
            id={name}
            accept="image/*"
            onChange={(e) => {
              handleImageChange(e);
              field.onChange(e); // Também chama o onChange do React Hook Form
            }}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                       file:text-sm file:font-semibold"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-auto h-96 rounded-md"
              />
            </div>
          )}
        </div>
      )}
    />
  );
};