
// import ExploreContent from "@/components/modules/Public/Explore";
// import { getAllTours } from "@/services/tour/tour.service";
// export const dynamic = "force-dynamic";

// interface ExplorePageProps {
//   searchParams: Promise<Record<string, string>>;
// }

// export default async function ExplorePage({ searchParams }: ExplorePageProps) {
//   // Await searchParams as it's now a Promise in Next.js 15+
//   const resolvedSearchParams = await searchParams;
  
//   // Set default limit if not provided
//   const params = {
//     ...resolvedSearchParams,
//     limit: resolvedSearchParams.limit || "12",
//     page: resolvedSearchParams.page || "1",
//   };
//   const result = await getAllTours(params);


//   return (
//     <ExploreContent
//       tours={result.data || []}
//       pagination={result.meta}
//     />
//   );
// }


// ##########




import ExploreContent from "@/components/modules/Public/Explore";
import { getAllTours } from "@/services/tour/tour.service";

export const dynamic = "force-dynamic";

export default async function ExplorePage({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  // Set default limit if not provided
  const params = {
    ...searchParams,
    limit: searchParams?.limit || "12",
    page: searchParams?.page || "1",
  };

  const result = await getAllTours(params);

  return (
    <ExploreContent
      tours={result.data || []}
      pagination={result.meta}
    />
  );
}

