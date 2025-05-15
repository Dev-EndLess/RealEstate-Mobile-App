# 🚀 Real Estate Mobile App 🚀

<a target="_blank" rel="noreferrer"><img src="https://camo.githubusercontent.com/2f9bfa35e9e5cc19903ca5e230e55a02c7a816eaea34aceb8a1deddfe4b513ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4578706f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6578706f26636f6c6f723d303030303230" alt="Appwrite" />
</a>
<a target="_blank" rel="noreferrer"><img src="https://camo.githubusercontent.com/4318b1b43422f3e2df0cee9da235b3680f08bddaa4f73fab85fc1c5c9f8b60fa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d547970655363726970742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d7479706573637269707426636f6c6f723d333137384336" alt="Appwrite" />
</a>
<a target="_blank" rel="noreferrer"><img src="https://camo.githubusercontent.com/4cbcc5434676759b67404424204b1f9d8932bad550d3e12921e34a2c874a82f1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d41707077726974652d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d617070777269746526636f6c6f723d464433363645" alt="Appwrite" />
</a>
<a target="_blank" rel="noreferrer"><img src="https://camo.githubusercontent.com/93bafe03a143d759a2983be7cd132f70a6a186233ca455f08f3f198adb3d2381/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5461696c77696e645f4353532d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d7461696c77696e6463737326636f6c6f723d303642364434" alt="Tailwind" />
</a>

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
You can download the Expo app in your app store to view the app on your mobile device.

# 🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, [JavaScript Mastery](https://www.youtube.com/@javascriptmastery/videos)

## Get started

1. Clone Repo

```bash
    git clone https://github.com/Dev-EndLess/RealEstate-Mobile-App.git
```
   
2. Install dependencies

```bash
    npm install
```

3. Start the app

```bash
    npx expo start
```

# ⚙️ Tech Stack
- Expo
- React Native
- TypeScript
- Nativewind
- Appwrite
- Tailwind CSS
 
### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

```bash
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up & creating a new project on the Appwrite website.

# 🔗 Assets
You need to create an Appwrite account, create a new project and set up a database.
 
You can sign up for a free account at [Appwrite](https://appwrite.io/).

Appwrite Database Setup can be found [here](https://jsmastery.notion.site/Database-Setup-16260f3cbaf3807f8fb6cbed8d1e84fd)

# Tips 
In seed.ts file you can find the data to populate your database.

propertyType and facilities variables need to be equal to the ones in the appwrite database.

The Button for triggering the seed, is in the index.tsx file.

    
