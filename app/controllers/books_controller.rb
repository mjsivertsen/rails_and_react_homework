class BooksController < ApplicationController


def app
  render component: "App"
end

def index
  books = Book.all
  render json: books
end

def create
  item = Book.new(books_params)
  if(book.save)
    render json: book
  else
  end
end



private

def books_params
  params.require(:book).permit(:title, :author)
end

end