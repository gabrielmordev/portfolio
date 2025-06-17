# 🚀 Despliegue en Cloudflare Pages

## ⚠️ Problema Identificado

El error que estás viendo se debe a que Cloudflare Pages tiene un límite de 25 MiB por archivo, y el archivo de caché de webpack (`cache/webpack/client-production/0.pack`) es de 33.4 MiB.

## ✅ Soluciones Implementadas

He añadido las siguientes configuraciones para resolver este problema:

### 1. **next.config.js** - Configuración optimizada
- `output: 'export'` - Genera archivos estáticos
- `images: { unoptimized: true }` - Optimiza imágenes para static export
- `config.cache = false` - Desactiva la caché de webpack
- Configuraciones adicionales para reducir el tamaño del bundle

### 2. **.cfignore** - Excluye archivos innecesarios
- Archivos de caché de Next.js
- node_modules
- Archivos de desarrollo
- Logs y archivos temporales

### 3. **package.json** - Scripts optimizados
- `pages:build` - Script específico para Cloudflare Pages
- Limpia la caché antes de cada build

### 4. **_headers** - Configuración de caché
- Headers de seguridad
- Configuración de caché para assets estáticos

## 🔧 Pasos para Resolver el Problema

### Opción 1: Reconfigurar Cloudflare Pages

1. **Ve a tu dashboard de Cloudflare Pages**
2. **Selecciona tu proyecto**
3. **Ve a Settings > Builds & deployments**
4. **Cambia la configuración de build:**
   - **Build command:** `npm run pages:build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (o déjalo vacío)

### Opción 2: Usar Vercel (Recomendado para Next.js)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 3: Limpiar y volver a desplegar

1. **Elimina el directorio `.next` localmente:**
   ```bash
   rm -rf .next
   ```

2. **Haz commit de los nuevos archivos de configuración:**
   ```bash
   git add .
   git commit -m "Add Cloudflare Pages optimization config"
   git push
   ```

3. **Vuelve a desplegar en Cloudflare Pages**

## 📋 Configuración Recomendada para Cloudflare Pages

```
Framework preset: Next.js
Build command: npm run pages:build
Build output directory: out
Root directory: (leave empty)
Environment variables: (none needed)
```

## 🎯 Alternativas de Despliegue

### **Vercel (Recomendado)**
- Optimizado específicamente para Next.js
- Deploy automático desde GitHub
- Sin límites de tamaño de archivo problemáticos

### **Netlify**
- Buena compatibilidad con Next.js
- Deploy desde GitHub
- Configuración similar a Cloudflare

### **GitHub Pages**
- Gratuito para repositorios públicos
- Requiere configuración adicional para Next.js

## 🔍 Verificar el Problema

Si el problema persiste, puedes verificar el tamaño de los archivos:

```bash
# Ver tamaño de archivos en .next
du -sh .next/*

# Ver archivos más grandes
find .next -type f -size +10M -exec ls -lh {} \;
```

## 📞 Soporte

Si necesitas ayuda adicional:
1. Verifica que todos los archivos de configuración estén en el repositorio
2. Asegúrate de que el build command sea `npm run pages:build`
3. Confirma que el output directory sea `out`

¡El portfolio debería desplegarse correctamente con estas configuraciones!
