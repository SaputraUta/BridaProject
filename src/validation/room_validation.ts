import z from "zod";

const path = /(\w?\:?\\?[\w\-_\\]*\\+)([\w-_]+)(\.[\w-_]+)/;
const harga = new RegExp("Rp\\s*[0-9]{1,3}(\\.[0-9]{3})");
const angka = new RegExp("^\\d$");

const room_validation = z
  .object({
    room_id: z.string(),
    nama_room: z.string().min(2, "Nama Venue yang Anda masukkan tidak boleh kurang dari 2 karakter"),
    harga_room: z.string().min(2, "Masukkan harga yang benar"),
    kapasitas: z.string().min(2, "Masukkan kapaitas yang benar"),
    })
  .partial({ 
    room_id: true,
  });

export type projectDataType = z.infer<typeof room_validation>;
export default room_validation;
