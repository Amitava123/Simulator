import QtQuick 2.7
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.0

import "menu.js" as Menu

ApplicationWindow {
    visible: true
    width: 640
    height: 480
    title: qsTr("Simulator")

    SwipeView {
        id: swipeView
        anchors.fill: parent
        currentIndex: tabBar.currentIndex

        QtObject {
            id: items
            property alias menu: menu
            property alias elements: elements
            property alias header: header
            property alias description: description
            property alias array: array
            property alias timer: timer
            property int runningAnimations: 0
        }

        Page {
            Rectangle {
                width: parent.width * 0.9
                height: parent.height * 0.9



                Component.onCompleted: Menu.start(items)

                anchors {
                    horizontalCenter: parent.horizontalCenter
                    verticalCenter: parent.verticalCenter
                }
                color: "transparent"

                Flickable {
                    anchors.fill: parent
                    contentHeight: menu.height
                    Flow {
                        id: menu
                        spacing: 10
                        anchors.fill: parent
                        Repeater {
                            id: elements
                            model: 160
                            Rectangle {
                                id: menuItem
                                width: 80
                                height: 80

                                property int index
                                property string topic

                                property bool selected: false
                                color: selected ? "red" : "black"
                                Text {
                                    id: label
                                    color: "white"
                                    anchors {
                                        verticalCenter: parent.verticalCenter
                                        horizontalCenter: parent.horizontalCenter
                                    }
                                    text: qsTr(menuItem.topic.toString())
                                }
                                MouseArea {
                                    anchors.fill: parent
                                    onClicked : Menu.load(index)
                                }
                            }
                        }
                    }
                }
            }
        }

        Page {
            Label {
                id: header
                text: qsTr("Name:")
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    top: parent.top
                }
            }
            Text {
                id: description
                anchors.top: header.bottom
                text: qsTr("Description")
            }
            Button {
                text: "Simulate"
                onClicked: Menu.simulate()
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    bottom: parent.bottom
                }
            }
            Flow {
                spacing: 10
                anchors.top: description.bottom
                Repeater {
                    id: array
                    model: 1
                    Rectangle {
                        id: arrayElement
                        width: 80
                        height: 80
                        color: notSelected ? "black" : (selectBig ? red : blue)

                        property int value
                        property bool selectBig: false
                        property bool selectSmall: false
                        property bool notSelected: true

                        Text {
                            id: arrayValue
                            color: "white"
                            anchors {
                                verticalCenter: parent.verticalCenter
                                horizontalCenter: parent.horizontalCenter
                            }
                            text: qsTr(arrayElement.value.toString())
                        }
                        Behavior on x {
                            PropertyAnimation {
                                id: animationX
                                duration: 500
                                easing.type: Easing.InOutBack
                                onRunningChanged: {
                                    if(animationX.running) {
//                                        items.runningAnimations++
                                    } else {
//                                        items.runningAnimations--
                                    }
                                }
                            }
                        }
                        Behavior on y {
                            PropertyAnimation {
                                id: animationY
                                duration: 500
                                easing.type: Easing.InOutBack
                                onRunningChanged: {
                                    if(animationY.running) {
//                                        items.runningAnimations++
                                    } else {
//                                        items.runningAnimations--
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    Timer {
        id: timer
        interval: 1000
        running: false
        repeat: false
        onTriggered: Menu.bSortNext()
    }

    footer: TabBar {
        id: tabBar
        currentIndex: swipeView.currentIndex
        TabButton {
            text: qsTr("Algorithms")
        }
        TabButton {
            text: qsTr("Simulator")
        }
    }
}
