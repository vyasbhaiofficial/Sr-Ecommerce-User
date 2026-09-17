import PolicyLayout from '@/components/common/PolicyLayout';

export const metadata = {
  title: "Terms & Condition | Sr Software Premium Sarees",
  description: "Read the Sr Software Terms & Condition to understand the rules and guidelines for using our website and services.",
  keywords: "terms of service, terms and conditions, user agreement, saree ecommerce"
};

async function getTermsPolicy() {
  try {
    const { getPolicy } = await import('@/Api/AllApi');
    const res = await getPolicy('Terms and Condition');
    return res.data?.[0]?.content || null;
  } catch (error) {
    console.error("Error fetching terms policy:", error);
    return null;
  }
}

export default async function TermsPage() {
  const contentHtml = await getTermsPolicy();

  return (
    <PolicyLayout
      title="Terms & Conditions"
      description="Welcome to Sr Software Premium Sarees. Please read these terms and conditions carefully before using our website."
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      contentHtml={contentHtml}
    />
  );
}
