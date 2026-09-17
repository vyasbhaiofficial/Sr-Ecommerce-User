import PolicyLayout from '@/components/common/PolicyLayout';

export const metadata = {
  title: "Shipping Policy | SR Ecommerce",
  description: "Read the SR Ecommerce Shipping Policy to understand our delivery timelines and processes.",
};

async function getShippingPolicy() {
  try {
    const { getPolicy } = await import('@/Api/AllApi');
    const res = await getPolicy('Shipping Policy');
    return res.data?.[0]?.content || null;
  } catch (error) {
    console.error("Error fetching shipping policy:", error);
    return null;
  }
}

export default async function ShippingPolicyPage() {
  const contentHtml = await getShippingPolicy();

  return (
    <PolicyLayout
      title="Shipping Policy"
      description="Thank you for shopping with SR Ecommerce. We aim to deliver your order safely and on time. Read on to understand our delivery processes."
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      contentHtml={contentHtml}
    />
  );
}
