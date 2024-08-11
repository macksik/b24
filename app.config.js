import 'dotenv/config';

export default {
    expo: {
        name: "test-task",
        slug: "test-task",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "myapp",
        userInterfaceStyle: "automatic",
        splash: {
            image: "./assets/images/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        ios: {
<<<<<<< HEAD
            bundleIdentifier: "com.b24.app",
=======
>>>>>>> b2e04cb1cfbe38bd93df921c780f3acddd07fc16
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            package: "com.b24.app"
        },
        web: {
            bundler: "metro",
            output: "static",
            favicon: "./assets/images/favicon.png"
        },
        plugins: [
            "expo-router"
        ],
        experiments: {
            typedRoutes: true
        },
        extra: {
            router: {
                origin: false
            },
            eas: {
                projectId: process.env.EAS_PROJECT_ID
            }
        }
    }
};