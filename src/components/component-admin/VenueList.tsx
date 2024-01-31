import VenueCart from "./VenueCart";

const VenueList = () => {
  return (
    <div className="grid grid-cols-3 mt-5 gap-5">
      <VenueCart
        imageUrl="/gelanggangpemuda.jpg"
        name="Gelanggang Pemuda"
        kota="Kota Mataram"
      />
      <VenueCart
        imageUrl="/tamansangkareang.jpg"
        name="Taman Sangkareang"
        kota="Lombok Barat"
      />
      <VenueCart
        imageUrl="/hotelaston.jpg"
        name="Hotel Aston"
        kota="Lombok Timur"
      />
      <VenueCart
        imageUrl="/pantaisenggigi.jpg"
        name="Pantai Senggigi"
        kota="Lombok Utara"
      />
      <VenueCart
        imageUrl="/lombokraya.jpg"
        name="Lombok Raya"
        kota="Lombok Tengah"
      />
    </div>
  );
};

export default VenueList;
