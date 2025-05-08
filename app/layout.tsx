import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MorphOS - AI-Powered Blockchain Platform",
  description: "Revolutionary blockchain platform with AI-powered relay system for enhanced security and efficiency.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
        <script>
          {`
            document.addEventListener('DOMContentLoaded', function() {
              mermaid.initialize({
                startOnLoad: true,
                theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
                securityLevel: 'loose',
                flowchart: { 
                  curve: 'basis',
                  htmlLabels: true
                }
              });
            });
          `}
        </script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          id="site-script"
          dangerouslySetInnerHTML={{
            __html: `
          // Mobile menu toggle
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const closeMenuButton = document.getElementById('close-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && closeMenuButton && mobileMenu) {
              mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
              });
              
              closeMenuButton.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
              });
              
              // Close menu when clicking on a link
              const mobileLinks = mobileMenu.querySelectorAll('a');
              mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                  mobileMenu.classList.add('hidden');
                });
              });
            }
            
            // Form validation
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
              contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                // Validate name
                const nameInput = document.getElementById('name');
                const nameError = document.getElementById('name-error');
                if (nameInput && nameError) {
                  if (!nameInput.value.trim()) {
                    nameError.classList.remove('hidden');
                    isValid = false;
                  } else {
                    nameError.classList.add('hidden');
                  }
                }
                
                // Validate email
                const emailInput = document.getElementById('email');
                const emailError = document.getElementById('email-error');
                if (emailInput && emailError) {
                  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                  if (!emailRegex.test(emailInput.value)) {
                    emailError.classList.remove('hidden');
                    isValid = false;
                  } else {
                    emailError.classList.add('hidden');
                  }
                }
                
                // Validate subject
                const subjectInput = document.getElementById('subject');
                const subjectError = document.getElementById('subject-error');
                if (subjectInput && subjectError) {
                  if (!subjectInput.value.trim()) {
                    subjectError.classList.remove('hidden');
                    isValid = false;
                  } else {
                    subjectError.classList.add('hidden');
                  }
                }
                
                // Validate message
                const messageInput = document.getElementById('message');
                const messageError = document.getElementById('message-error');
                if (messageInput && messageError) {
                  if (!messageInput.value.trim()) {
                    messageError.classList.remove('hidden');
                    isValid = false;
                  } else {
                    messageError.classList.add('hidden');
                  }
                }
                
                // If form is valid, show success message
                if (isValid) {
                  const formSuccess = document.getElementById('form-success');
                  if (formSuccess) {
                    formSuccess.classList.remove('hidden');
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                      formSuccess.classList.add('hidden');
                    }, 5000);
                  }
                }
              });
            }
            
            // Back to top button
            const backToTopButton = document.getElementById('back-to-top');
            if (backToTopButton) {
              window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                  backToTopButton.classList.remove('opacity-0', 'invisible');
                  backToTopButton.classList.add('opacity-100', 'visible');
                } else {
                  backToTopButton.classList.remove('opacity-100', 'visible');
                  backToTopButton.classList.add('opacity-0', 'invisible');
                }
              });
              
              backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              });
            }
            
            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
              themeToggle.addEventListener('click', function() {
                document.documentElement.classList.toggle('dark');
                
                // Save theme preference
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                
                // Update Mermaid theme
                if (window.mermaid) {
                  window.mermaid.initialize({
                    theme: isDark ? 'dark' : 'default'
                  });
                  
                  // Reload diagrams
                  document.querySelectorAll('.mermaid').forEach(el => {
                    const content = el.textContent;
                    el.textContent = '';
                    el.textContent = content;
                  });
                  
                  if (typeof window.mermaid.run === 'function') {
                    window.mermaid.run();
                  }
                }
              });
              
              // Set initial theme based on preference
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
              } else if (savedTheme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            }
          });
        `,
          }}
        />
      </body>
    </html>
  )
}
