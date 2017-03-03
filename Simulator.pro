QT += qml quick

CONFIG += c++11

SOURCES += main.cpp \
    core/directory.cpp

RESOURCES += qml.qrc \
    algorithms.qrc

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Default rules for deployment.
include(deployment.pri)

DISTFILES += \
    MenuItems.qml \
    simulations/bubble_sort/bubble_sort.qml

HEADERS += \
    core/directory.h
