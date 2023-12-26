import HomePageLayout from '@/components/layout/HomePageLayout'
import HomePage from '@/components/pages/HomePage';
import BasePadding from '@/components/util/base-padding/BasePadding'

export default function Home() {
  return (
		<HomePageLayout>
			{/* <BasePadding> */}
        <HomePage />
      {/* </BasePadding> */}
		</HomePageLayout>
	);
}
