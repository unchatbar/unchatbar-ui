'use strict';

/**
 * @ngdoc function
 * @name unchatbar.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 *
 * Controller of the unchatbar project
 */
angular.module('unchatbar')
  .controller('DashboardCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.header = {
      messages: [{
        _links: {
          avatar: {
            href: 'images/agent-coulson.png'
          }
        },
        sender: 'Agent Coulson',
        text: 'Agent Coulson sent you a message',
        date: 'some seconds ago'
      }, {
        _links: {
          avatar: {
            href: 'images/black-widow.png'
          }
        },
        sender: 'Black Widow',
        text: 'Black widow sent you a message',
        date: '3 minutes ago'
      }, {
        _links: {
          avatar: {
            href: 'images/captain-america.png'
          }
        },
        sender: 'Captain America',
        text: 'Captain America sent you a message',
        date: '5 minutes ago'
      }, {
        _links: {
          avatar: {
            href: 'images/giant-man.png'
          }
        },
        sender: 'Giant Man',
        text: 'Giant Man sent you a message',
        date: '15 minutes ago'
      }]
    };

    $scope.sidebar = {
      users: {
        online: [{
          _links: {
            avatar: {
              href: 'images/hawkeye.png'
            }
          },
          name: 'Hawkeye',
          status: 'Availabe'
        }, {
          _links: {
            avatar: {
              href: 'images/hulk.png'
            }
          },
          name: 'Hulk',
          status: 'Don\'t make me angry!'
        }, {
          _links: {
            avatar: {
              href: 'images/iron-man.png'
            }
          },
          name: 'Iron Man',
          status: 'I am Iron Man!'
        }],
        offline: [{
          name: 'Captain America'
        }, {
          name: 'Giant Man'
        }, {
          name: 'Black Widow'
        }, {
          name: 'Loki'
        }]
      },
      groups: {
        online: [{
          _links: {
            avatar: {
              href: 'images/loki.png'
            }
          },
          name: 'Development',
          status: 'We rule!'
        }, {
          _links: {
            avatar: {
              href: 'images/nick-fury.png'
            }
          },
          name: 'Support',
          status: 'How can we help?'
        }],
        offline: [{
          name: 'Administration'
        }, {
          name: 'Marketing'
        }, {
          name: 'Sales'
        }]
      }
    };

    $scope.chat = {
      alerts: [{
        type: 'info',
        message: 'War Machine is calling.'
      }],
      messages: [{
        '_links': {
          avatar: {
            href: 'images/thor.png'
          }
        },
        align: 'left',
        sender: 'Thor',
        text: 'Hello War Machine, how can I help you today?',
        date: '09:23'
      }, {
        '_links': {
          avatar: {
            href: 'images/war-machine.png'
          }
        },
        align: 'right',
        sender: 'War Machine',
        text: 'Hi, I want to buy a new weapon.',
        date: '09:23'
      }, {
        '_links': {
          avatar: {
            href: 'images/thor.png'
          }
        },
        align: 'left',
        sender: 'Thor',
        text: 'Shipment is free. You\'ll get your weapon tomorrow!',
        date: '09:25'
      }, {
        '_links': {
          avatar: {
            href: 'images/war-machine.png'
          }
        },
        align: 'right',
        sender: 'War Machine',
        text: 'Wow, that\'s great!',
        date: '09:27'
      }, {
        '_links': {
          avatar: {
            href: 'images/war-machine.png'
          }
        },
        align: 'right',
        sender: 'War Machine',
        text: 'Ok. Thanks for the answer. Appreciated.',
        date: '09:28'
      }, {
        '_links': {
          avatar: {
            href: 'images/thor.png'
          }
        },
        align: 'left',
        sender: 'Thor',
        text: 'You are welcome! <br> Is there anything else I can do for you today?',
        date: '09:30'
      }, {
        '_links': {
          avatar: {
            href: 'images/war-machine.png'
          }
        },
        align: 'right',
        sender: 'War Machine',
        text: 'Nope, That\'s it.',
        date: '09:31'
      }, {
        '_links': {
          avatar: {
            href: 'images/thor.png'
          }
        },
        align: 'left',
        sender: 'Thor',
        text: 'Thank you for contacting us today.',
        date: '09:32'
      }]
    };

    $scope.addAlert = function (message) {
      $scope.chat.alerts.push({
        type: 'info',
        message: message
      });
    };

    $scope.closeAlert = function (index) {
      $scope.chat.alerts.splice(index, 1);
    };

  });
