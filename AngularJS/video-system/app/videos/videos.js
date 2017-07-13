/*jshint esversion: 6 */
'use strict';

angular.module('videoSystem.videos', [])
    .factory('videos', ['$q', function($q) {

        var videos = [];
        videos.push({
            title: 'Course introduction',
            pictureUrl: 'http://softuni.bg/picture.png',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
                hasSubtitles: false,
                comments: [
                    {
                        username: 'Pesho Peshev',
                        content: 'Congratulations Nakov',
                        date: new Date(2014, 12, 15, 12, 30, 0),
                        likes: 3,
                        websiteUrl: 'http://pesho.com/'
                    }
                ]
            },
            {
                title: 'AngularJS Routes',
                pictureUrl: 'http://softuni.bg/picture.png',
                length: '93:32',
                category: 'IT',
                subscribers: 30,
                date: new Date(2014, 12, 18),
                hasSubtitles: true,
                comments: [
                    {
                        username: 'Pesho Peshev',
                        content: 'Congratulations Nakov',
                        date: new Date(2014, 12, 15, 12, 30, 0),
                        likes: 3,
                        websiteUrl: 'http://pesho.com/'
                    }
                ]
            },
            {
                title: 'Cooking with Pesho',
                pictureUrl: 'http://softuni.bg/picture.png',
                length: '63:32',
                category: 'Cooking',
                subscribers: 3,
                date: new Date(2014, 12, 17),
                hasSubtitles: false,
                comments: [
                    {
                        username: 'Gosho Peshev',
                        content: 'Congratulations Pesho',
                        date: new Date(2014, 12, 15, 12, 30, 0),
                        likes: 3,
                        websiteUrl: 'http://pesho.com/'
                    }
                ]
            }
        );

        function getAll() {
            return videos;
        }

        function getAllCategories() {
            return videos.map(x => x.category).filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
        }

        function getAllDates() {
            return videos.map(x => x.date).filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
        }

        function add(video){
            video.date = Date.now();
            videos.push(video);
        }

        function filter(category, date, hasSubtitles){
            var filteredVideos = [];
            if(category){
                filteredVideos = videos.filter(v => v.category === category);
            }

            if(date){
                filteredVideos = videos.filter(v => v.date === date);
            }

            if(hasSubtitles !== null && hasSubtitles){
                filteredVideos = videos.filter(v => v.hasSubtitles);
            }
            else if(hasSubtitles !== null && !hasSubtitles){
                filteredVideos = videos.filter(v => !v.hasSubtitles);
            }

            return filteredVideos;
        }

        function sort(title, length, date, subscribers){
            var sortedVideos = [];
            if(title){
                sortedVideos = videos.sort((a,b) => a.title - b.title);
            }

            if(length){
                sortedVideos = videos.sort((a,b) => a.length- b.length);
            }

            if(date){
                sortedVideos = videos.sort((a,b) => a.date - b.date);
            }

            if(subscribers){
                sortedVideos = videos.sort((a,b) => a.subscribers - b.subscribers);
            }

            return sortedVideos;
        }


        return {
            getAll: getAll,
            add: add,
            filter: filter,
            sort: sort,
            getAllCategories: getAllCategories,
            getAllDates: getAllDates
        };
}]);