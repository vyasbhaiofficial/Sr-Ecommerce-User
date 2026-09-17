import PolicyLayout from '@/components/common/PolicyLayout';

export const metadata = {
  title: "Cancellation Policy | SR Ecommerce",
  description: "Read the SR Ecommerce Cancellation Policy to understand how to cancel orders.",
};

async function getCancellationPolicy() {
  try {
    const { getPolicy } = await import('@/Api/AllApi');
    const res = await getPolicy('Cancellation Policy');
    return res.data?.[0]?.content || null;
  } catch (error) {
    console.error("Error fetching cancellation policy:", error);
    return null;
  }
}

export default async function CancellationPolicyPage() {
  const contentHtml = await getCancellationPolicy();

  return (
    <PolicyLayout
      title="Cancellation Policy"
      description="At SR Ecommerce, we understand that you may need to cancel an order. Please review our cancellation policy below."
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      contentHtml={contentHtml}
    />
  );
}
