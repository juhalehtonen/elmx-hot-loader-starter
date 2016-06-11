port module Main exposing (..)

import Html exposing (div, button, text, h2, input, ul, li)
import Html.App exposing (program)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (..)
import Time
import Components.Counter as Counter


main : Program Never
main =
  program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL


type alias Model =
  { counter : Counter.Model
  , elapsed : Int
  , alertText : String
  , logs : List String
  }


init : (Model, Cmd msg)
init =
  (Model 0 0 "It works!" [], Cmd.none)


-- UPDATE


type Msg
  = CounterUpdate Counter.Msg
  | Tick
  | Alert
  | ChangeAlertText String
  | Log String

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    CounterUpdate msg ->
      let
        ( count, cmds ) = Counter.update msg model.counter
      in
        ( { model | counter = count }, Cmd.map CounterUpdate cmds )

    Tick ->
      ({ model | elapsed = model.elapsed + 1}, Cmd.none)

    Alert ->
      (model, alert model.alertText)

    ChangeAlertText text ->
      ({ model | alertText = text }, Cmd.none)

    Log text ->
      ({ model | logs = text :: model.logs }, Cmd.none)


port alert : String -> Cmd msg
port log : (String -> msg) -> Sub msg


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch
    [ Time.every Time.second <| always Tick
    , log Log
    ]


-- VIEW


boxStyle : List ( String, String )
boxStyle =
  [ ("border", "1px solid #ccc")
  , ("border-radius", "4px")
  , ("padding", "10px")
  , ("margin", "10px")
  ]


view : Model -> Html.Html Msg
view model =
  div []
    [ Html.App.map CounterUpdate <| Counter.view model.counter
    , div [ style boxStyle ]
        [ h2 [] [ text "Time.every second" ]
        , text <| "elapsed seconds: " ++ (toString model.elapsed)
        ]
    , div [ style boxStyle ]
        [ h2 [] [ text "Outgoing Port" ]
        , input [ type' "text", value model.alertText, onInput ChangeAlertText ] []
        , button [ onClick Alert ] [ text "call alert" ]
        ]
    , div [ style boxStyle ]
        [ h2 [] [ text "Incoming Port" ]
        , ul [] <|
            List.map (\t -> li [] [ text t]) model.logs
        ]
    ]
