import { SkipOption } from '../types/skip';

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export async function fetchSkips(): Promise<SkipOption[]> {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.map((skip: any) => ({
    id: skip.id,
    size: skip.size,
    price: skip.price_before_vat + skip.vat,
    hirePeriod: `${skip.hire_period_days} day hire`,
    // image: skip.imageUrl || undefined, // Uncomment if image is available
  }));
}
