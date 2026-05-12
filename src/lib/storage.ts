import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadToCloud(file: File, folder: string): Promise<string> {
  const extension = file.name.substring(file.name.lastIndexOf('.'));
  const uniqueId = crypto.randomUUID();
  const fileName = `${folder}/${uniqueId}${extension}`;

  const { data, error } = await supabase.storage
    .from('uploads')
    .upload(fileName, file, {
      contentType: file.type || 'application/octet-stream',
      upsert: false
    });

  if (error) {
    console.error('Supabase Upload Error:', error);
    throw new Error('Error al subir la imagen a la nube');
  }

  const { data: publicUrlData } = supabase.storage
    .from('uploads')
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}
