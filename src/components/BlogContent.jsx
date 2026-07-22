import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default function BlogContent({ content }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-blue-900/5 border border-[#e8edf7] mb-12">
      <div 
        className="prose prose-lg max-w-none 
          prose-headings:font-serif prose-headings:text-[#1e293b] prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#e8edf7] prose-h2:pb-4
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-[#64748b] prose-p:leading-8 prose-p:mb-6
          prose-a:text-[#032e92] prose-a:font-semibold hover:prose-a:text-[#c10000] prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-[#c10000] prose-blockquote:bg-red-50/50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#1e293b] prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:my-10 prose-blockquote:shadow-sm
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ul:text-[#64748b]
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8 prose-ol:text-[#64748b]
          prose-li:mb-3 prose-li:pl-2 prose-strong:text-[#1e293b]
          prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
          prose-table:w-full prose-table:border-collapse prose-table:my-10 prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm prose-table:border prose-table:border-[#e8edf7]
          prose-thead:bg-[#f7f9fc] prose-th:p-4 prose-th:text-left prose-th:text-sm prose-th:font-bold prose-th:text-[#1e293b] prose-th:uppercase prose-th:tracking-wide
          prose-td:p-4 prose-td:border-t prose-td:border-[#e8edf7] prose-td:text-sm prose-td:text-[#64748b] prose-td:font-medium
          
          /* Custom Callout Styles via generic classes if used in content */
          [&_.callout-info]:bg-[#eef4ff] [&_.callout-info]:border-l-4 [&_.callout-info]:border-[#032e92] [&_.callout-info]:p-6 [&_.callout-info]:rounded-r-2xl [&_.callout-info]:my-8 [&_.callout-info_p]:m-0 [&_.callout-info_p]:text-[#032e92]
          [&_.callout-warning]:bg-yellow-50 [&_.callout-warning]:border-l-4 [&_.callout-warning]:border-yellow-500 [&_.callout-warning]:p-6 [&_.callout-warning]:rounded-r-2xl [&_.callout-warning]:my-8 [&_.callout-warning_p]:m-0 [&_.callout-warning_p]:text-yellow-800
          [&_.callout-success]:bg-green-50 [&_.callout-success]:border-l-4 [&_.callout-success]:border-green-500 [&_.callout-success]:p-6 [&_.callout-success]:rounded-r-2xl [&_.callout-success]:my-8 [&_.callout-success_p]:m-0 [&_.callout-success_p]:text-green-800
        "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
