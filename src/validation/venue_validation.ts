import z from "zod";

// const MapsRegex = /\bhttps?:\/\/www\.google\.com\/maps\b/;
// const alamatRegex = new RegExp("^[\w\s]+,\s[\w\s]+$");
// const path = /(\w?\:?\\?[\w\-_\\]*\\+)([\w-_]+)(\.[\w-_]+)/;

const venue_validation = z
  .object({
    venue_id: z.string(),
    nama_venue: z.string().min(2, "Nama Venue yang Anda masukkan tidak boleh kurang dari 2 karakter"),
    // gambar_venue: z.string().regex(path, "Gambar venue harus sesuai denga pathnya"),
    alamat_venue: z.string().min(2, "Alamat Venue yang Anda masukkan tidak boleh kurang dari 2 karakter"),
    penanggung_jawab: z.string().min(2, "Nama penanggung jawab yang Anda masukkan tidak boleh kurang dari 2 karakter"),
  })
  .partial({
    venue_id: true,
  });

export type projectDataType = z.infer<typeof venue_validation>;
export default venue_validation;
