import { useParams, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import BlogHero from '../components/BlogHero';
import BlogContent from '../components/BlogContent';
import TableOfContents from '../components/TableOfContents';
import BlogSidebar from '../components/BlogSidebar';
import AuthorCard from '../components/AuthorCard';
import ShareButtons from '../components/ShareButtons';
import RelatedBlogs from '../components/RelatedBlogs';
import PreviousNextBlogs from '../components/PreviousNextBlogs';
import Newsletter from '../components/Newsletter';
import { blogPosts } from '../data/blogs';

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogPosts.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const breadcrumbItems = [
    { label: 'Blogs', href: '/blogs' },
    { label: blog.title, href: '#' }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#f7f9fc] font-sans">
        <Helmet>
          <title>{blog.title} | SIF Platform</title>
          <meta name="description" content={blog.title} />
        </Helmet>
        
        <Navbar />
        
        <main className="pt-24 lg:pt-32 pb-20">
          <article className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <Breadcrumb items={breadcrumbItems} />
            
            <BlogHero blog={blog} />

            <div className="flex flex-col lg:flex-row gap-12 relative items-start">
              
              {/* Left Column (70%) */}
              <div className="w-full lg:w-[70%]">
                <BlogContent content={blog.content} />
                <ShareButtons title={blog.title} />
                <AuthorCard author={blog.author} />
                <PreviousNextBlogs currentId={blog.id} />
              </div>

              {/* Right Column / Sidebar (30%) */}
              <aside className="w-full lg:w-[30%] lg:sticky lg:top-28 space-y-8">
                <div className="hidden lg:block">
                  <TableOfContents />
                </div>
                <BlogSidebar tags={blog.tags} />
              </aside>

            </div>

            <RelatedBlogs currentId={blog.id} category={blog.category} />

          </article>

          <Newsletter />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
