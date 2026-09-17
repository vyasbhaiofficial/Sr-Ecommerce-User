import PolicyLayout from '@/components/common/PolicyLayout';

export const metadata = {
  title: "Return & Refund Policy | SR Ecommerce",
  description: "Read the SR Return & Refund Policy to understand our return guidelines and processes.",
};

async function getReturnPolicy() {
  try {
    const { getPolicy } = await import('@/Api/AllApi');
    const res = await getPolicy('Return and Refund Policy');
    return res.data?.[0]?.content || null;
  } catch (error) {
    console.error("Error fetching return policy:", error);
    return null;
  }
}

export default async function ReturnPolicyPage() {
  const contentHtml = await getReturnPolicy();

  return (
    <PolicyLayout
      title="Return & Refund Policy"
      description="At SR Ecommerce, customer satisfaction is our priority. If you are not completely satisfied with your purchase, please review our return and refund policy below."
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      contentHtml={contentHtml}
    />
  );
}
