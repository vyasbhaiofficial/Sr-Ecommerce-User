import PolicyLayout from '@/components/common/PolicyLayout';

export const metadata = {
  title: "Privacy Policy | Sr Software Premium Sarees",
  description: "Read the Sr Software Privacy Policy to understand how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, security, saree ecommerce"
};

async function getPrivacyPolicy() {
  try {
    const { getPolicy } = await import('@/Api/AllApi');
    const res = await getPolicy('Privacy Policy');
    return res.data?.[0]?.content || null;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    return null;
  }
}

export default async function PrivacyPolicyPage() {
  const contentHtml = await getPrivacyPolicy();

  return (
    <PolicyLayout
      title="Privacy Policy"
      description="At Sr Software Premium Sarees, your trust and privacy are our highest priority. We are committed to protecting and safeguarding your personal information."
      date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      contentHtml={contentHtml}
    />
  );
}
