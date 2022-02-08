/* AppMode: The enumerated type for AppMode. */

const AppMode = {
    LOGIN: "LoginMode",
    PROFILE: "ProfileMode",
    ABOUT: "AboutMode"
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;
