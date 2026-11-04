import path from 'path';
import { defineConfig, Plugin } from 'vite';
import fs from 'fs';

// Plugin to seamlessly map .php file requests to corresponding rendered .html files in Vite dev server
function phpStaticMiddlewarePlugin(): Plugin {
  return {
    name: 'php-static-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const parsedUrl = new URL(req.url, 'http://localhost');
        const pathname = parsedUrl.pathname;

        // If requesting a .php file, map to .html or handle dynamic query
        if (pathname.endsWith('.php')) {
          const htmlName = pathname.replace(/\.php$/, '.html');
          const targetHtmlPath = path.resolve(__dirname, '.' + (htmlName === '/' ? '/index.html' : htmlName));
          
          if (fs.existsSync(targetHtmlPath)) {
            let htmlContent = fs.readFileSync(targetHtmlPath, 'utf-8');
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.statusCode = 200;
            res.end(htmlContent);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [phpStaticMiddlewarePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          academics: path.resolve(__dirname, 'academics.html'),
          admissions: path.resolve(__dirname, 'admissions.html'),
          examinations: path.resolve(__dirname, 'examinations.html'),
          student_life: path.resolve(__dirname, 'student_life.html'),
          facilities: path.resolve(__dirname, 'facilities.html'),
          faculty: path.resolve(__dirname, 'faculty.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          under_construction: path.resolve(__dirname, 'under-construction.html'),
          course_bsc_cs: path.resolve(__dirname, 'course-bsc-cs.html'),
          course_bsc_nutrition: path.resolve(__dirname, 'course-bsc-nutrition.html'),
          course_bsc_maths: path.resolve(__dirname, 'course-bsc-maths.html'),
          course_bsc_microbiology: path.resolve(__dirname, 'course-bsc-microbiology.html'),
          course_ba_english: path.resolve(__dirname, 'course-ba-english.html'),
          course_bcom: path.resolve(__dirname, 'course-bcom.html'),
          course_bcom_ism: path.resolve(__dirname, 'course-bcom-ism.html'),
          course_ma_english: path.resolve(__dirname, 'course-ma-english.html'),
          course_mcom: path.resolve(__dirname, 'course-mcom.html'),
          course_msw: path.resolve(__dirname, 'course-msw.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
