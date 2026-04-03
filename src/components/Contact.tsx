import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Whether you have an opportunity or just want to chat about data, my inbox is always open.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a href="mailto:hello@adityasinh.in" className="text-gray-600 hover:text-blue-600">hello@adityasinh.in</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                <a href="https://linkedin.com/in/adityasinh" target="_blank" className="text-gray-600 hover:text-blue-600">linkedin.com/in/adityasinh</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-gray-700 bg-gray-100 rounded">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">GitHub</h3>
                <a href="https://github.com/adityasinh" target="_blank" className="text-gray-600 hover:text-blue-600">github.com/adityasinh</a>
              </div>
            </div>
          </div>

          {/* simple form */}
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
              <textarea
                id="message"
                placeholder="How can I help you?"
                rows={5}
                className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 resize-none"
              />
            </div>
            
            <button
              type="button"
              className="w-full py-4 bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition rounded"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
