class Idea < ActiveRecord::Base
  default_scope { order('created_at DESC') }

  validates :title, presence: true
  validates :body, presence: true

  enum quality: [:swill, :plausible, :genius]
end
