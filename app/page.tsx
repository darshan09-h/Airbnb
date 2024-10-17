import Categories from "./components/Categoires";
import PropertyList from "./components/properties/PropertyList";


export default function Home() {
  return (
    <main className="mx-w-[1500] mx-auto px-6">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyList />
      </div>

    </main>
  );
}
