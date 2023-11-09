import z from "zod";

const MapsRegex = /\bhttps?:\/\/www\.google\.com\/maps\b/;
const alamatRegex = new RegExp("^[\w\s]+,\s[\w\s]+$");

const news_validation = z
  .object({
    id: z.string(),
    judul_news: z.string().min(5, "Judul berita yang Anda masukkan tidak boleh kurang dari 5 karakter"). max(25, "Judul Berita tidak boleh lebih dari 25 karakter"),
    gambar_news: z.string().min(2, "Gambar venue harus sesuai denga pathnya dengan minimal 2 karakter"),
    isi_berita: z.string().min(10, "Deskripsi yang anda masukkan tidak boleh kurang dari 10 karakter").max(500,"Deskripsi yang anda masukkan tidak boleh lebih dari 500 karakter"),
    })
  .partial({
    id: true,
  });

export type projectDataType = z.infer<typeof news_validation>;
export default news_validation;
