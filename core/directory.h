#ifndef DIRECTORY_H
#define DIRECTORY_H

#include <QObject>
#include <QString>
#include <QGuiApplication>
#include <QQmlApplicationEngine>

class Directory : public QObject
{
    Q_OBJECT
public:
    explicit Directory(QObject *parent = 0);


signals:

public slots:
};

#endif // DIRECTORY_H
