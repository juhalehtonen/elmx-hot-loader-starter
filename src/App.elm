module App exposing (..)

import Main exposing (init, view, update, subscriptions)
import Html.App exposing (program)

main : Program Never
main =
  program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
