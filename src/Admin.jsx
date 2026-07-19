import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Admin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMessage('Error loading data. Are you running the Studio server?');
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
    setSaving(true);
    fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        setSaving(false);
        setMessage('Saved successfully! You can now push to GitHub.');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(err => {
        console.error(err);
        setSaving(false);
        setMessage('Failed to save changes.');
      });
  };

  const updateProject = (index, field, value) => {
    const newData = { ...data };
    newData.projects[index][field] = value;
    setData(newData);
  };

  const updateFeatured = (field, value) => {
    const newData = { ...data };
    newData.featured[field] = value;
    setData(newData);
  };

  if (loading) return <div className="p-20 text-center font-mono">Loading Studio...</div>;
  if (!data) return <div className="p-20 text-center font-mono text-red-500">{message || 'Not available in production.'}</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8 pb-32">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold">Portfolio Studio</h1>
            <p className="text-sm text-gray-500 font-mono mt-2">Local CMS Dashboard</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-black border border-black text-black hover:bg-black hover:text-white transition"
            >
              View Analytics
            </a>
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-black text-white px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-blue-600 transition disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </header>

        {message && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 rounded-lg font-mono text-sm">
            {message}
          </div>
        )}

        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-12">
          <h2 className="text-xl font-bold mb-6 font-serif">Featured Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Title</label>
              <input
                type="text"
                value={data.featured.title}
                onChange={(e) => updateFeatured('title', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Category</label>
              <input
                type="text"
                value={data.featured.category}
                onChange={(e) => updateFeatured('category', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Image Filename</label>
              <input
                type="text"
                value={data.featured.image}
                onChange={(e) => updateFeatured('image', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Website Link</label>
              <input
                type="text"
                value={data.featured.link || ''}
                placeholder="https://..."
                onChange={(e) => updateFeatured('link', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Description</label>
              <textarea
                value={data.featured.description}
                onChange={(e) => updateFeatured('description', e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 h-24"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 font-serif">All Projects</h2>
          <div className="space-y-6">
            {data.projects.map((proj, idx) => (
              <motion.div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 mb-1 uppercase">Title</label>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => updateProject(idx, 'title', e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 mb-1 uppercase">Category</label>
                  <input
                    type="text"
                    value={proj.category}
                    onChange={(e) => updateProject(idx, 'category', e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 mb-1 uppercase">Image Filename</label>
                  <input
                    type="text"
                    value={proj.image}
                    onChange={(e) => updateProject(idx, 'image', e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 mb-1 uppercase">Website Link</label>
                  <input
                    type="text"
                    value={proj.link || ''}
                    placeholder="https://..."
                    onChange={(e) => updateProject(idx, 'link', e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-mono text-gray-500 mb-1 uppercase">Description</label>
                  <textarea
                    value={proj.description}
                    onChange={(e) => updateProject(idx, 'description', e.target.value)}
                    className="w-full p-2 bg-gray-50 rounded border border-gray-200 text-sm h-16"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
