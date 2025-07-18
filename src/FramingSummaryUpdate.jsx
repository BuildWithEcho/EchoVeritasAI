const framingSummary = (
  <div className="space-y-4 text-white">
    <h2 className="text-xl font-bold">📰 Framing by Outlet</h2>

    <div className="bg-neutral-900 p-4 rounded-xl shadow-md border border-yellow-500">
      <p><strong>CNN</strong> frames the Senate vote as a blow to local media and rural communities. The network highlights how the cuts threaten public media, especially in underserved areas. They quote PBS CEO Paula Kerger: <em>“Public television stations will be ‘forced to make hard decisions in the weeks and months ahead.’”</em> (<a href="https://www.cnn.com" className="underline text-yellow-400" target="_blank">CNN</a>)</p>
    </div>

    <div className="bg-neutral-900 p-4 rounded-xl shadow-md border border-red-500">
      <p><strong>Fox News</strong> presents the rescission as a fiscally responsible move. The outlet emphasizes Republican support and the intent to cut what they call unnecessary spending. They report that Senate Republicans “rammed through President Trump’s $9 billion clawback package.” (<a href="https://www.foxnews.com" className="underline text-red-400" target="_blank">Fox News</a>)</p>
    </div>

    <div className="bg-neutral-900 p-4 rounded-xl shadow-md border border-blue-500">
      <p><strong>NPR and PBS</strong> respond critically, warning the cuts will disproportionately harm small and rural stations. NPR CEO Katherine Maher and PBS President Paula Kerger state that the move could <em>“undermine essential services and disproportionately impact vulnerable communities.”</em> (<a href="https://www.npr.org/2025/07/17/nx-s1-5469904/npr-pbs-cuts-rescission-senate-vote" className="underline text-blue-400" target="_blank">NPR</a>, <a href="https://www.vulture.com/article/npr-pbs-rescission-funding-trump.html" className="underline text-blue-400" target="_blank">Vulture</a>)</p>
    </div>

    <div className="bg-yellow-100 text-black text-sm p-3 rounded-md border-l-4 border-yellow-500 mt-6">
      <strong>Disclaimer:</strong> This tool does not replace or reinterpret the news. Our goal is to increase media literacy by helping users visualize bias and framing. We do not twist or rewrite stories. Please review the full articles yourself for complete context.
    </div>
  </div>
);

export default framingSummary;