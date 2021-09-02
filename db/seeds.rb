# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Book.destroy_all

Book.create(title: "Siddhartha", author: "Herman Hesse")
Book.create(title: "The Four Agreements", author: "Paul Miguel Ruiz")
Book.create(title: "The Satanic Bible", author: "Anton LaVey")