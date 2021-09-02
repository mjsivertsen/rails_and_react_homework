class BooksController < ApplicationController


def app
  render component: "App"
end

def index
  books = Book.all
  render json: books
end

def create
  book = Book.new(books_params)
  if(book.save)
    render json: book
  else
    puts "dangit"
  end
end

def destroy
  @book = Book.find(params[:id])
  render json: @book.destroy
end

private

def books_params
  params.require(:book).permit(:title, :author)
end

end