import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React Tailwind CSS' }
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-blue-500">
        <div className="lg:col-span-8 col-span-1 bg-red-500">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 bg-yellow-500">
          <div className="lg:sticky relative top-8 bg-white-500">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
