class Idea < ActiveRecord::Base
  default_scope { order('created_at DESC') }

  validates :title, presence: true
  validates :body, presence: true
  validates :quality, inclusion: { in: ["swill", "plausible", "genius"], message: "%{value} isn't acceptable" }

  enum quality: [:swill, :plausible, :genius]

  def integer_quality
    Idea.qualities[quality]
  end
end
