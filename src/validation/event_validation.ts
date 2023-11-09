import z from "zod";
const path = /(\w?\:?\\?[\w\-_\\]*\\+)([\w-_]+)(\.[\w-_]+)/;

const event_validation = z
  .object({
    room_id: z.string(),
    nama_room: z.string().min(3, "Nama dari Room yang Anda masukkan tidak boleh kurang dari 3 karakter"),
    gambar_event: z.string().regex(path, "Gambar event harus sesuai denga pathnya dengan"),
    desc_event: z.string().min(10, "Deskripsi yang anda masukkan tidak boleh kurang dari 10 karakter").max(300,"Deskripsi yang anda masukkan tidak boleh lebih dari 300 karakter"),
    sop: z.string().min(10, "SOP yang anda masukkan tidak boleh kurang dari 10 karakter").max(300,"SOP yang anda masukkan tidak boleh lebih dari 300 karakter"),
    alur_perizinan: z.string().min(10, "Alur perizinan yang anda masukkan tidak boleh kurang dari 10 karakter").max(100,"Deskripsi yang anda masukkan tidak boleh lebih dari 100 karakter"),
    kondisional: z.string().min(10, "Data Kondisional yang anda masukkan tidak boleh kurang dari 10 karakter").max(100,"Data Kondisional yang anda masukkan tidak boleh lebih dari 100 karakter"),
    template_surat: z.string().min(3, "template surat harus sesuai denga pathnya dengan minimal 3 karakter"),
  })
  .partial({
    room_id: true,
  });

export type projectDataType = z.infer<typeof event_validation>;
export default event_validation;
