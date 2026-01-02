# 🔧 Guide de Dépannage UPGLOW

## Problème : L'application ne fonctionne pas dans Chrome

Si l'application fonctionne dans d'autres navigateurs ou en mode privé Chrome, mais pas en mode normal Chrome, suivez ces étapes :

### Solution Rapide 🚀

1. **Visitez la page de réinitialisation** : 
   - Allez sur : `http://localhost:3000/unregister-sw.html` (en développement)
   - Ou : `https://votre-domaine.com/unregister-sw.html` (en production)

2. **Cliquez sur "Tout Réinitialiser"**

3. **Fermez tous les onglets** de l'application

4. **Rouvrez l'application**

### Solution Manuelle 🛠️

#### Étape 1 : Désinstaller le Service Worker

1. Ouvrez Chrome DevTools (F12)
2. Allez dans l'onglet **Application**
3. Dans le menu de gauche, cliquez sur **Service Workers**
4. Cliquez sur **Unregister** pour chaque service worker
5. Cochez **Update on reload**

#### Étape 2 : Vider le Cache

1. Toujours dans DevTools > **Application**
2. Cliquez sur **Storage** dans le menu de gauche
3. Cliquez sur **Clear site data**
4. Assurez-vous que tout est coché :
   - ✅ Local and session storage
   - ✅ IndexedDB
   - ✅ Web SQL
   - ✅ Cookies
   - ✅ Cache storage
5. Cliquez sur **Clear site data**

#### Étape 3 : Vider le Cache du Navigateur

1. Appuyez sur `Ctrl + Shift + Delete` (Windows) ou `Cmd + Shift + Delete` (Mac)
2. Sélectionnez **Tout le temps**
3. Cochez :
   - ✅ Images et fichiers en cache
   - ✅ Cookies et autres données de site
4. Cliquez sur **Effacer les données**

#### Étape 4 : Hard Reload

1. Fermez tous les onglets de l'application
2. Rouvrez l'application
3. Appuyez sur `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)

### Pourquoi ce problème arrive-t-il ? 🤔

Chrome peut avoir des problèmes avec :
- **Service Workers** qui cachent agressivement les ressources
- **LocalStorage** qui peut avoir des conflits d'hydratation
- **Cache** qui peut servir d'anciennes versions de l'application

Le mode privé fonctionne car il n'utilise pas le cache ou le localStorage existant.

### Prévention 🛡️

Pour éviter ce problème à l'avenir :

1. **En développement** :
   - Gardez DevTools ouvert avec "Disable cache" coché
   - Utilisez "Update on reload" pour les Service Workers

2. **En production** :
   - Le service worker a été optimisé pour utiliser "Network First" pour les pages HTML
   - Le cache est maintenant plus intelligent et ne cache que les assets statiques

### Toujours des problèmes ? 🆘

Si le problème persiste :

1. **Vérifiez la console** (F12 > Console) pour les erreurs
2. **Vérifiez l'onglet Network** pour voir si les requêtes échouent
3. **Essayez un autre profil Chrome** pour isoler le problème
4. **Réinstallez Chrome** en dernier recours

### Contact 📧

Si rien ne fonctionne, contactez le support avec :
- Version de Chrome
- Système d'exploitation
- Captures d'écran des erreurs dans la console
- Étapes pour reproduire le problème

