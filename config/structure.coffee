# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Home"
      id: "tours-list"
      location: "tours-list#tours-list" # Supersonic module#view type navigation
    }
    {
      title: "Settings"
      id: "settings"
      location: "settings#settings" # Supersonic module#view type navigation
    }
  ]

  # rootView:
  #   location: "splash#splash_page"

  rootView:
    location: "tourList#index"

  preloads: [
    {
      id: "tours-list"
      location: "tours-list#tours-list"
    }
  ]

  initialView:
    id: "splash"
    location: "splash#splash_page"

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "splash"
  #   location: "splash#splash_page"
